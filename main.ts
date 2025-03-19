input.onButtonPressed(Button.A, function () {
    tasks_left += -1
    displayStatus(tasks_left, time_units_left)
})
function displayStatus (left_count: number, right_count: number) {
    for (let col = 0; col <= 1; col++) {
        for (let row = 0; row <= 4; row++) {
            if (col * 5 + row < left_count) {
                led.plot(col, 4 - row)
            } else {
                led.unplot(col, 4 - row)
            }
        }
    }
    for (let col2 = 0; col2 <= 1; col2++) {
        for (let row2 = 0; row2 <= 4; row2++) {
            if (col2 * 5 + row2 < right_count) {
                led.plot(col2 + 3, 4 - row2)
            } else {
                led.unplot(col2 + 3, 4 - row2)
            }
        }
    }
}
let time_units_left = 0
let tasks_left = 0
tasks_left = 10
time_units_left = 10
displayStatus(tasks_left, time_units_left)
basic.forever(function () {
	
})
