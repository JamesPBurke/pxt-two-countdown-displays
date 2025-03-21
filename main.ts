/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#AF0000" weight=100
namespace boomDisplay {
    //% block="display status left_count $left_count right_count $right_count"
    //% left_count.defl-100
    //% right_count.defl-100
    export function displayStatus(left_count: number, right_count: number) {
        basic.clearScreen()
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

}