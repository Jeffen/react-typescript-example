export default theme => ({
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
    backgroundColor: '#d50000 !important',
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
  }
});
