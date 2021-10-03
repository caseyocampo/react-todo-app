const TodoItemStyles = {
    margin: '0 auto',
    padding: '0 1em',
    width: '100%'
}

const SkillLevel = {
    // display: 'flex',
    // flexDirection: 'column'
}

function TodoItem(props) {
    return (
        <div style={TodoItemStyles}>
            {/* <input type="checkbox" /> */}
            <label><strong>{props.item.technology}</strong></label>
            <p style={{marginTop: '10px', marginBottom: '25px'}}><strong>Skill level</strong>: {props.item.experience}</p>
            <div style={SkillLevel}>
                <input type="checkbox" />
                <label style={{marginLeft: '10px', marginRight: '20px'}}><strong>Novice</strong></label>
                <input type="checkbox" />
                <label style={{marginLeft: '10px', marginRight: '20px'}}><strong>Intermediate</strong></label>
                <input type="checkbox" />
                <label style={{marginLeft: '10px', marginRight: '20px'}}><strong>Advanced</strong></label>
            </div>

            <br />
            <hr />
            <br />
        </div>
    )
}

export default TodoItem;