import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import SettingsIcon from "@material-ui/icons/Settings";
import React from "react";

import { LayoutButton } from "..";
import useStyles from "./styles";

export interface PopoverCustomProps {
	open?: boolean;
}
export const PopoverCustom: React.FC<PopoverCustomProps> = ({
	children,
	open = false,
	...props
}) => {
	const classes = useStyles({});
	const [isMenuOpened, setMenuState] = React.useState(open);
	const anchor = React.useRef<HTMLButtonElement>(null);

	const closeMenu = () => setMenuState(false);
	return (
		<>
			<LayoutButton
				className={classes.userChip}
				ref={anchor}
				onClick={() => setMenuState(!isMenuOpened)}
				state={isMenuOpened ? "active" : "default"}
				{...props}
			>
				<SettingsIcon />
			</LayoutButton>
			<Popper
				className={classes.popover}
				open={isMenuOpened}
				anchorEl={anchor.current}
				transition
				placement="bottom-end"
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom" ? "right top" : "right bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={closeMenu} mouseEvent="onClick">
								{children}
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}

			</Popper>
		</>
	)
}