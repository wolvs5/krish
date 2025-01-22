import random
import pygame

pygame.init()
#this is for screen dimensions and colors
SCREEN_WIDTH = 400
SCREEN_HEIGHT = 600

WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
RED = (255, 0, 0)

#initializes the window for the game
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Rain of Coins")

#frame rate and the clock for the game
clock = pygame.time.Clock()
FPS = 60

#loads images to the game
robot_img = pygame.image.load("robot.png")
robot_width = robot_img.get_width()

coin_img = pygame.image.load("coin.png")
coin_img = pygame.transform.scale(coin_img, (20, 20))

monster_img = pygame.image.load("monster.png")
monster_img = pygame.transform.scale(monster_img, (30, 30))

#variables for the robot(player)
robot_x = SCREEN_WIDTH // 2
robot_y = SCREEN_HEIGHT - 60
robot_speed = 5

#objests
coins = [] #for list coins
monsters = [] #for list monsters

#for spawn rate of the coins and monster.
coin_spawn_rate = 30  #to spawn frequesnt coins and monster = high number
monster_spawn_rate = 50
#game state initial and final variables
score = 0
game_over = False
#function to add coin or monster in the game
def add_object(obj_list, size):
    x = random.randint(0, SCREEN_WIDTH - size)#random x cordinate in the game width
    y = 0 # position where the obj starts at the top of screen
    obj_list.append({"x": x, "y": y, "size": size})
#function which updates the position of objects
def update_objects(obj_list, speed):
    for obj in obj_list:
        obj["y"] += speed #moves the object down to the screen
#checks if the player hit the monster or coins
def check_collision(obj_list, x, y, size):
    for obj in obj_list:
        if (
            obj["x"] < x < obj["x"] + obj["size"] or obj["x"] < x + size < obj["x"] + obj["size"]
        ) and y < obj["y"] + obj["size"] < y + size:
            return obj
    return None
#game main loop
while True:
    #handels the game event
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            pygame.quit()
            exit()

    if not game_over:#for player movement
        keys = pygame.key.get_pressed()
        if keys[pygame.K_LEFT] and robot_x > 0:
            robot_x -= robot_speed
        if keys[pygame.K_RIGHT] and robot_x < SCREEN_WIDTH - robot_width:
            robot_x += robot_speed


        if score >= 30:#handels the spawn rate of the objects according to the score
            coin_spawn_rate = 60
            monster_spawn_rate = 30
        else:
            coin_spawn_rate = 30
            monster_spawn_rate = 30

        if random.randint(1, coin_spawn_rate) == 1:#spawns coin and monster
            add_object(coins, 30)
        if random.randint(1, monster_spawn_rate) == 1:
            add_object(monsters, 30)

        update_objects(coins, 5)#updates the obj so it doesnt spawn in the same location
        update_objects(monsters, 6)
#checks collision with the coin
        collected_coin = check_collision(coins, robot_x, robot_y, robot_width)
        if collected_coin:
            coins.remove(collected_coin)#after the robot(player) touches the coin it removes it
            score += 1 # and adds the score
#checks collision with monster
        hit_monster = check_collision(monsters, robot_x, robot_y, robot_width)
        if hit_monster:
            game_over = True #ends the game
#removes the object after it reaches to the bottom of the screen
        coins = [coin for coin in coins if coin["y"] < SCREEN_HEIGHT]
        monsters = [monster for monster in monsters if monster["y"] < SCREEN_HEIGHT]

    screen.fill(BLACK)#background screen

    if game_over:
        #displays game over after collision with the monster
        font = pygame.font.Font(None, 74)
        text = font.render("GAME OVER", True, RED)
        screen.blit(text, (SCREEN_WIDTH // 2 - 150, SCREEN_HEIGHT // 2 - 50))

        #displays the final score
        font = pygame.font.Font(None, 36)
        text = font.render(f"Score: {score}", True, WHITE)
        screen.blit(text, (SCREEN_WIDTH // 2 - 50, SCREEN_HEIGHT // 2 + 20))
    else:
        #to draw the player
        screen.blit(robot_img, (robot_x, robot_y))
        for coin in coins:#draws coin
            screen.blit(coin_img, (coin["x"], coin["y"]))
        for monster in monsters:#draws monster
            screen.blit(monster_img, (monster["x"], monster["y"]))

        font = pygame.font.Font(None, 36)
        text = font.render(f"Score: {score}", True, WHITE)
        screen.blit(text, (10, 10))
    #updates the display so the objects are showns in the screen
    pygame.display.flip()
    clock.tick(FPS)
