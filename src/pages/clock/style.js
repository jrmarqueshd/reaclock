import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: #333333;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	margin: 0;
	padding: 0;
	width: 100%;
`;

export const BodyClock = styled.div`
	background-color: #6a6a6a;
	border: 20px solid rgba(178, 178, 178, 0.7);
	border-radius: 100%;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	position: relative;
	width: 400px;

	span {
		background-color: rgb(178, 178, 178);
		border-radius: 100%;
		display: block;
		height: 20px;
		width: 20px;
		z-index: 999999;
	}
`;

export const ClockNumbers = styled.div`
	color: #fff;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 3em;
	position: absolute;
	${props => (props.position ? `${props.position}10px` : "top: 0")};
`;

export const PointerHoursWrapper = styled.div`
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	position: absolute;
	transform: ${props => (props.hours ? `rotate(${props.hours * 30}deg)` : "")};
	transition: all 987ms ease-in-out;
	width: 400px;
	z-index: 999;

	span {
		background-color: #000;
		border-radius: 20px;
		display: block;
		height: 120px;
		width: 10px;
		margin-bottom: 120px;
	}
`;

export const PointerMinutesWrapper = styled.div`
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	height: 400px;
	transform: ${props =>
		props.minutes ? `rotate(${props.minutes * 6}deg)` : ""};
	transition: all 987ms ease-in-out;
	width: 400px;

	span {
		background-color: #000;
		border-radius: 20px;
		display: block;
		height: 170px;
		margin-bottom: 170px;
		width: 9px;
	}
`;

export const PointerSecondsWrapper = styled.div`
	border-radius: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 400px;
	position: absolute;
	transform: ${props =>
		props.seconds ? `rotate(${props.seconds * 6}deg)` : ""};
	width: 400px;

	span {
		background-color: #e61919;
		border-radius: 20px;
		display: block;
		height: 180px;
		margin-bottom: 180px;
		width: 5px;
	}
`;
