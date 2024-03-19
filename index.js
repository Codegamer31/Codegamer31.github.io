var len = [
            document.getElementById(1),
            document.getElementById(2),
            document.getElementById(3),
            document.getElementById(4),
            document.getElementById(5),
            document.getElementById(6),
            document.getElementById(7),
                                        ]

for (let i = 0; i < len.length; i++) {
    var element = len[i]
    var x_index = Math.floor(Math.random()*(90-10)+10)
    var z_index = Math.floor(Math.random()*(90-10)+10)
    element.style.left = x_index + "vw"
    element.style.top = z_index + "vh"
}