import Countdown, { CountdownRendererFn } from 'react-countdown'
import CountDownRenderer from './CountDownRenderer'
import {
	STATE_END,
	STATE_LOADING,
	STATE_NOT_STARTED,
	STATE_STARTED,
} from '@/pages/participant/[code]'

interface Props {
	className?: string
	start: string
	end: string
	currentState: string
}

export default function CountDown(props: Props) {
	const countDown: CountdownRendererFn = ({
		days,
		hours,
		minutes,
		seconds,
	}) => {
		return (
			<CountDownRenderer
				days={days}
				hours={hours}
				minutes={minutes}
				seconds={seconds}
			/>
		)
	}

	return (
		<div className={`text-center space-y-8 ${props.className}`}>
			{props.currentState === STATE_LOADING && <>Tunggu sebentar...</>}
			{props.currentState === STATE_NOT_STARTED && (
				<>
					<p className='text-xl font-medium'>Voting akan dimulai pada:</p>
					<div className='px-10 py-5 mx-auto border border-gray-100 rounded-md bg-gray-50 w-fit'>
						<Countdown date={props.start} renderer={countDown} />
					</div>
				</>
			)}
			{props.currentState === STATE_END && (
				<>
					<p className='text-xl font-medium'>Voting telah berakhir</p>
				</>
			)}
			{props.currentState === STATE_STARTED && (
				<>
					<p className='text-xl font-medium'>Voting sedang berlangsung</p>
					<div className='px-10 py-5 mx-auto border border-gray-100 rounded-md bg-gray-50 w-fit'>
						<Countdown date={props.end} renderer={countDown} />
					</div>
				</>
			)}
		</div>
	)
}
