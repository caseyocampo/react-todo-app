function Conditional(props) {
    return (
        <div className="hero-logged-out">
            <h1 className="logged-out-header" style={{fontFamily: 'Oswald, sans-serif', fontSize: '64px', color: `var(--red)`, textTransform: 'uppercase'}}>Las Vegas Trip 2021</h1>
            <p style={{maxWidth: '400px', marginTop: '0', fontSize: '24px', lineHeight: '1.5', color: 'white'}}>This year I get to treat my mom to a Las Vegas vacation. Log in to view what’s on our Vegas To Do List! <span className="sign-up-break">(No sign up required.)</span></p>
        </div>
    )
}

export default Conditional