import {
    verde,
    rojo,
    blanco,
  } from "../cssPadre/cssPadre";

const styles = theme => ({

      colorIconoEditar: {
        color: blanco,
        backgroundColor: verde,
        margin: theme.spacing.unit,
        height: 36,
        borderRadius: 16 
      },
      colorIconoEliminar: {
        color: blanco,
        backgroundColor: rojo,
        margin: theme.spacing.unit,
        height: 36,
        borderRadius: 16 
      },
      estiloTableHeader:{
        padding: "none",
        align: "center"
      },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
      },
      appBar: {
        top: 'auto',
        bottom: 0,
      },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },

    
    root: {
        overflowX: 'auto',
    },

    button:
    {
        flexGrow: 1,
        margin: theme.spacing.unit,
        backgroundColor: "#52ab56",
        color: "#FAFAFA",
    },

    container:
    {
        flexWrap: 'wrap',
    },

    content:
    {
        padding: theme.spacing.unit * 1,
    },

    textField:
    {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense:
    {
        marginTop: 16,
    },
    margin:
    {
        margin: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit,
    },
    padding:
    {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
    btnmargin:
    {
        margin: theme.spacing.unit,
    },
    estiloCeldas: {
        padding: "none"
    },
    tableResponsive: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },

});

export default styles;