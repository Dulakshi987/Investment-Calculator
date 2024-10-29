import logo from '../assests/img_investment_logo.jpeg';

export default function Header(){
    return(
<header id="header">

<img src={logo} alt="Investment Logo" />
    
    <h1> Invenstment Calculator</h1>
</header>

    );
}