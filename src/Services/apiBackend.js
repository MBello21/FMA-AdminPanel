export const getHealthy = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/health')

    const data = await response.json()
    return data.msg !== 'ok'
}

export const getUser = async () => {
    const response = await fetch('http://127.0.0.1:5000/api/user',
        {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTc4MjQyMTA1NSwianRpIjoiZTZiOGY0MjktZmU3MC00MzZiLWI5MTgtYmVkNTU0YzA3OTVkIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjEiLCJuYmYiOjE3ODI0MjEwNTUsImNzcmYiOiI3NzFkZmE1OC02NzgzLTRhN2QtOGY0OS02MjA5Njg3NjZhN2IiLCJleHAiOjE3ODI0MjE5NTV9.gkOw1XVXrKjq1FKEJrCNh8uO_y6OV8_0P3x1pwM9MXo`
            }
        }
    )
    const data = await response.json()
    return data
}