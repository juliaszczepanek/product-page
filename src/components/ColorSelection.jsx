import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
  } from "@mui/material";
  
  export default function ColorSelection({ colors, value, onChange }) {
    return (
      <Box sx={{ minWidth: 160 }}>
        <FormControl fullWidth>
          <InputLabel id="color-label">Color</InputLabel>
          <Select
            labelId="color-label"
            value={value}
            label="Color"
            onChange={(e) => onChange(e.target.value)}
            sx={{ fontFamily: "Poppins, sans-serif" }}

            renderValue={(selectedId) => {
            const selected = colors.find(c => c.id === selectedId);
                return (
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <img
                    src={selected.image}
                    alt={selected.name}
                    width={16}
                    height={16}
                    className="rounded border border-gray-300"
                    />
                    <span>{selected.name}</span>
                </Box>
                );
            }}
            >
            {colors.map((color) => (
              <MenuItem key={color.id} value={color.id} sx={{display: "flex", gap: 1}}>
               
               <img
                src={color.image}
                alt={color.name}
                width={12}
                height={12}
              />
              {color.name} 
                
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    );
  }
  