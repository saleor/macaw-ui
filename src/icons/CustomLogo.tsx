import React from 'react';
interface CustomLogoProps {
	src: string
}
export const CustomLogo = ({src}: CustomLogoProps): JSX.Element => {
	return <img src={src} width={36} height={33} />
}