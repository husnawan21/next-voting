import CountDownItem from './CountDownItem'

interface Props {
	days: number
	hours: number
	minutes: number
	seconds: number
}

export default function CountDownRenderer(props: Props) {
	return (
		<div className='flex flex-row justify-center mx-auto'>
			{props.days > 0 && <CountDownItem label='Hari' value={props.days} />}
			{props.hours > 0 && <CountDownItem label='Jam' value={props.hours} />}
			{props.minutes > 0 && (
				<CountDownItem label='Menit' value={props.minutes} />
			)}
			<CountDownItem label='Detik' value={props.seconds} />
		</div>
	)
}
