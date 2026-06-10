export function toggleTheme(){

    document.body.classList.toggle(
        "dark-mode"
    )

    const darkMode =
        document.body.classList.contains(
            "dark-mode"
        )

    localStorage.setItem(
        "theme",
        darkMode
    )
}

export function loadTheme(){

    const darkMode =
        localStorage.getItem(
            "theme"
        )

    if(darkMode === "true"){

        document.body.classList.add(
            "dark-mode"
        )
    }
}