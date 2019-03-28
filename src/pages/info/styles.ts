import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  margin: {
    marginBottom: 16
  },
  priceText: {
    fontSize: `1.3em`,
    color: `#d20b1d`,
    fontWeight: 600
  },
  oldPrice: {
    marginLeft: 4,
    textDecoration: 'line-through',
    color: '#4a4a4a'
  },
  flatBtn: {
    boxShadow: 'none',
    backgroundColor: '#e0e0e0',
    marginRight: 8,
    marginBottom: 8,
    minWidth: 85,
    '&:focus': {
      boxShadow: 'none'
    }
  },
  selected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
    color: 'white'
  },
  priceBtn: {
    boxShadow: 'none',
    backgroundColor: '#e0e0e0',
    marginRight: 8,
    marginBottom: 8,
    minWidth: 85,
    '&:focus': {
      boxShadow: 'none'
    }
  },
  numBtn: {
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  quantityInput: {
    width: 48,
    padding: '.67857143em 1em',
    paddingRight: 6,
    'text-align': 'center',
    border: '1px solid rgba(34,36,38,.15)',
    outline: 0,
    lineHeight: '1.21428571em',
    fontSize: 16,
    borderRadius: 4,
    color: 'black'
  },
  actionBtn: {
    marginTop: 32,
    marginRight: 12,
    letterSpacing: 1.4,
    fontSize: 16,
    height: 54,
    width: 168
  },
  badge: {
    color: '#d50000',
    display: 'inline-flex',
    top: -2,
    marginLeft: 6,
    fontSize: '0.9em',
    background: 'white',
    width: 18,
    height: 18,
    lineHeight: '18px',
    borderRadius: '50%',
    justifyContent: 'center'
  }
});
