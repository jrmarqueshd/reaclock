import axios from "axios";

export const api = axios.create({
	baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=e4b75c0e&woeid=455827`
});
