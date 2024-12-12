function convert(choice) {
    const input = document.getElementById("inputNumber").value.trim();
    let result = "";
    try {
        switch (choice) {
            case 1:
                result = `Екілік жүйеде: ${parseInt(input, 10).toString(2)}`;
                break;
            case 2:
                result = `Сегіздік жүйеде: ${parseInt(input, 10).toString(8)}`;
                break;
            case 3:
                result = `Он алтылық жүйеде: ${parseInt(input, 10).toString(16).toUpperCase()}`;
                break;
            case 4:
                result = `Ондық жүйеде: ${parseInt(input, 2)}`;
                break;
            case 5:
                result = `Ондық жүйеде: ${parseInt(input, 8)}`;
                break;
            case 6:
                result = `Ондық жүйеде: ${parseInt(input, 16)}`;
                break;
            default:
                result = "Қате таңдау.";
        }
    } catch (error) {
        result = "Қате: енгізілген санды тексеріңіз.";
    }
    document.getElementById("result").textContent = result;
}