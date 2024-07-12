def rollDice():
    global isShakeing, random_number
    isShakeing = True
    random_number = randint(1, 6)
    if random_number == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            """)
    if random_number == 2:
        basic.show_leds("""
            . . . . .
            . . . # .
            . . . . .
            . # . . .
            . . . . .
            """)
    if random_number == 3:
        basic.show_leds("""
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            """)
    if random_number == 4:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            """)
    if random_number == 5:
        basic.show_leds("""
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            """)
    if random_number == 6:
        basic.show_leds("""
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            """)
    basic.pause(3000)
    basic.clear_screen()
    isShakeing = False

def on_gesture_shake():
    if isShakeing == False:
        rollDice()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def start():
    for index in range(1):
        led.toggle(2, 2)
        basic.pause(250)
random_number = 0
isShakeing = False
isShakeing = False

def on_forever():
    while isShakeing == False:
        start()
basic.forever(on_forever)
