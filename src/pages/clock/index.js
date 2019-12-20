import React, { useState, useEffect } from "react";

import { api } from "../../services/api";

import {
	Wrapper,
	BodyClock,
	PointerHoursWrapper,
	PointerMinutesWrapper,
	PointerSecondsWrapper,
	ClockNumbers,
	ClockSlashs
} from "./style";

export default function Clock() {
	const [weather, setWeather] = useState({});

	const [hours, setHours] = useState(0);

	const [minutes, setMinutes] = useState(0);

	const [seconds, setSeconds] = useState(0);

	useEffect(() => {
		async function receivedWeather() {
			const response = await api.get();

			setWeather(response.data.results);
		}

		receivedWeather();
	}, []);

	setInterval(() => {
		setHours(new Date().getHours());
		setMinutes(new Date().getMinutes());
		setSeconds(new Date().getSeconds());
	}, 1000);

	return (
		<Wrapper>
			<BodyClock>
				<ClockNumbers position="top:">12</ClockNumbers>
				<ClockNumbers position="right:">3</ClockNumbers>
				<ClockNumbers position="bottom:">6</ClockNumbers>
				<ClockNumbers position="left:">9</ClockNumbers>

				<ClockSlashs
					style={{ right: 107, top: 30 }}
					transform="rotate(30deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ right: 42, top: 96 }}
					transform="rotate(60deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ right: 42, bottom: 96 }}
					transform="rotate(120deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ right: 107, bottom: 30 }}
					transform="rotate(150deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ left: 107, bottom: 30 }}
					transform="rotate(210deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ left: 42, bottom: 96 }}
					transform="rotate(240deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ left: 107, top: 30 }}
					transform="rotate(330deg)"
				></ClockSlashs>

				<ClockSlashs
					style={{ left: 42, top: 96 }}
					transform="rotate(300deg)"
				></ClockSlashs>

				<span></span>

				<PointerHoursWrapper hours={hours + minutes / 60}>
					<span></span>
				</PointerHoursWrapper>
				<PointerMinutesWrapper minutes={minutes}>
					<span></span>
				</PointerMinutesWrapper>
				<PointerSecondsWrapper seconds={seconds}>
					<span></span>
				</PointerSecondsWrapper>
			</BodyClock>
		</Wrapper>
	);
}
