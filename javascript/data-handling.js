function fetchData() {
    fetch("./songlists.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
}
