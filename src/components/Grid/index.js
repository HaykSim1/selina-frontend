import classNames from 'classnames';

import './index.css';

export function Row({ children, className, ...rest }) {
	return (
		<div
			{...rest}
			className={classNames('row', className)}
		>
			{children}
		</div>
	)
}

export function Column({ children, className, ...rest }) {
	return (
		<div
			{...rest}
			className={classNames('column', className)}
		>
			{children}
		</div>
	)
}

