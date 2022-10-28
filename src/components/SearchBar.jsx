import { useState } from 'react'
import { Paper, TextField } from '@material-ui/core'

export default function SearchBar({ onSubmit }){
    const [searchTerm, setSearchTerm] = useState('')

    const handleKeyPress = (e) => {
        if (e.key === "Enter"){
            onSubmit(searchTerm)
        }
    }
    return(
        <Paper elevation={6} style={{ padding: "25px"}}>
            <TextField 
                fullWidth
                label = "Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
            />
        </Paper>
    )
}