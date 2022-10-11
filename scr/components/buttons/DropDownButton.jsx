import CDropdown from 'react-bootstrap/Dropdown';

function DropDownButton() {
    return (

        <CDropdown>
            2  <CDropdownToggle color="secondary">Dropdown button</CDropdownToggle>
            3  <CDropdownMenu>
                4    <CDropdownItem href="#">Action</CDropdownItem>
                5    <CDropdownItem href="#">Another action</CDropdownItem>
                6    <CDropdownItem href="#">Something else here</CDropdownItem>
                7  </CDropdownMenu>
            8</CDropdown>
    );
}

export default DropDownButton;