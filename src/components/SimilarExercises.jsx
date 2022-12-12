import { Box, Stack, Typography } from "@mui/material"
import HorizontalScrollBar from "./HorizontalScrollBar"
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ lg: '100px', xs: '0'}}>
        <Typography variant="h3" mb={6}>
        More Exercises for similar muscle group
        <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
            {targetMuscleExercises.length ? 
            <HorizontalScrollBar data={targetMuscleExercises}/> : 
            <Loader />}
        </Stack>
        </Typography>

        <Typography variant="h3" mb={6}>
        More Exercises that use same equipment
        <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
            {equipmentExercises.length ? 
            <HorizontalScrollBar data={equipmentExercises}/> : 
            <Loader />}
        </Stack>
        </Typography>
    </Box>
  )
}

export default SimilarExercises