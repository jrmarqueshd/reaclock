import React, { useState } from "react";

import {
	Wrapper,
	BodyClock,
	PointerHoursWrapper,
	PointerMinutesWrapper,
	PointerSecondsWrapper,
	ClockNumbers
} from "./style";

export default function Clock() {
	const [hours, setHours] = useState(0);

	const [minutes, setMinutes] = useState(0);

	const [seconds, setSeconds] = useState(0);

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
				<span></span>
				<PointerHoursWrapper hours={hours}>
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
