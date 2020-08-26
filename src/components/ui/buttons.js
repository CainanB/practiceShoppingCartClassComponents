import React from 'react';
import ButtonGroup from '@bit/nexxtway.react-rainbow.button-group';
import Button from '@bit/nexxtway.react-rainbow.button';
import ButtonIcon from '@bit/nexxtway.react-rainbow.button-icon';
import ButtonMenu from '@bit/nexxtway.react-rainbow.button-menu';
import MenuItem from '@bit/nexxtway.react-rainbow.menu-item';
import './style.css';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faPlus, faPencilAlt, faPaste, faAngleDown } = require('@fortawesome/free-solid-svg-icons');

export default (
	<div>
		<ButtonGroup>
			<Button variant="neutral">
				<FontAwesomeIcon icon={faPlus} className="rainbow-m-right_small" />
				Add
        </Button>
			<Button variant="neutral">
				<FontAwesomeIcon icon={faPencilAlt} className="rainbow-m-right_small" />
				Edit
        </Button>
			<Button variant="neutral">
				<FontAwesomeIcon icon={faPaste} className="rainbow-m-right_small" />
				Paste
        </Button>
		</ButtonGroup>
		<br />
		<ButtonGroup style={{ marginTop: 10 }}>
			<ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPlus} />} />
			<ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPencilAlt} />} />
			<ButtonIcon variant="border-filled" icon={<FontAwesomeIcon icon={faPaste} />} />
			<ButtonMenu
				menuAlignment="right"
				menuSize="x-small"
				icon={<FontAwesomeIcon icon={faAngleDown} />}
			>
				<MenuItem label="Menu Item One" />
				<MenuItem label="Menu Item Two" />
				<MenuItem label="Menu Item Three" />
			</ButtonMenu>
		</ButtonGroup>
        </div>
)