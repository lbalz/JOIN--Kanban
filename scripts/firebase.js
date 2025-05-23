const accountColors = {
    orange: "#FF7A00",
    pink: "#FF5EB3",
    blue_pruple: "#6E52FF",
    purple: "#9327FF",
    turquoise: "#00BEE8",
    green_blue: "#1FD7C1",
    red_orange: "#FF745E",
    skin_color: "#FFA35E",
    light_pink: "#FC71FF",
    dark_yellow: "#FFC701",
    dark_blue: "#0038FF",
    lime: "#C3FF2B",
    yellow: "#FFE62B",
    light_red: "#FF4646",
    light_orange: "#FFBB2B"
};

const BASE_URL = "";

async function getDataFromDB(path="") {
    try {
        const response = await fetch(`${BASE_URL}${path}` + ".json");
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data from DB:", error);
    }
}

async function postDataToDB(data, path="") {

}