// ----------------------------------------------------------------------

import { Theme } from "@mui/material";

export default function Card(theme: Theme) {
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[1],
                    borderRadius: Number(theme.shape.borderRadius) * 2,
                    position: "relative",
                    zIndex: 0, // Fix Safari overflow: hidden with border radius
                },
            },
        },
        MuiCardHeader: {
            defaultProps: {
                titleTypographyProps: { variant: "h6" },
                subheaderTypographyProps: {
                    variant: "body2",
                    marginTop: theme.spacing(0.5),
                },
            },
            styleOverrides: {
                root: {
                    padding: theme.spacing(3, 3, 0),
                },
            },
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(3),
                },
            },
        },
    };
}
