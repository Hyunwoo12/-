let 첫번째_번호 = 0
let 두번째_번호 = 0
let 세번째_번호 = 0
let 네번째_번호 = 0
let 다섯번째_번호 = 0
let 여섯번째_번호 = 0
input.onGesture(Gesture.Shake, function () {
    첫번째_번호 = randint(1, 45)
    두번째_번호 = randint(1, 45)
    세번째_번호 = randint(1, 45)
    네번째_번호 = randint(1, 45)
    다섯번째_번호 = randint(1, 45)
    여섯번째_번호 = randint(1, 45)
    basic.showNumber(첫번째_번호)
    if (input.isGesture(Gesture.Shake)) {
        if (두번째_번호 == 세번째_번호) {
            두번째_번호 = randint(1, 45)
            basic.showNumber(두번째_번호)
        } else {
            basic.showNumber(두번째_번호)
            if (input.isGesture(Gesture.Shake)) {
                if (세번째_번호 == (첫번째_번호 || 두번째_번호)) {
                    세번째_번호 = randint(1, 45)
                    basic.showNumber(세번째_번호)
                } else {
                    if (네번째_번호 == (첫번째_번호 || (두번째_번호 || 세번째_번호))) {
                        네번째_번호 = randint(1, 45)
                        basic.showNumber(네번째_번호)
                    } else {
                        basic.showNumber(네번째_번호)
                        if (input.isGesture(Gesture.Shake)) {
                            if (다섯번째_번호 == (첫번째_번호 || (두번째_번호 || (세번째_번호 || 네번째_번호)))) {
                                다섯번째_번호 = randint(1, 45)
                                basic.showNumber(다섯번째_번호)
                            } else {
                                basic.showNumber(다섯번째_번호)
                                if (input.isGesture(Gesture.Shake)) {
                                    if (여섯번째_번호 == (첫번째_번호 == (두번째_번호 == (세번째_번호 == (네번째_번호 == (다섯번째_번호 == 여섯번째_번호)))))) {
                                        여섯번째_번호 = randint(1, 45)
                                    }
                                    basic.showNumber(여섯번째_번호)
                                }
                            }
                        }
                    }
                }
            }
        }
    }
})
