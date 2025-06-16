

/// do it later
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
function ProfileButton() {
    return (
        <div className='ml-4' >
            <Stack direction="row" spacing={2}>
                <Avatar
                    alt="Remy Sharp"
                    src=""
                    sx={{ width: 50, height: 50 }}
                />
            </Stack>
            
        </div>
    )
}

export default ProfileButton

