import { Theme } from '@material-ui/core';

export default (theme: Theme) => ({
  h3: {
    marginTop: '3.5em'
  },
  divider: {
    marginBottom: '2em',
    marginTop: '-10px'
  },
  paymentButton: {
    display: 'inline-block',
    width: '200px',
    height: '58px',
    overflow: 'hidden',
    '&:last-child': {
      'margin-left': '16px'
    },
    "& > input[type='radio']:checked + label": {
      boxShadow: `0 0 0 2px ${theme.palette.primary.main} inset`
    },
    '& > label': {
      width: '100%',
      height: '100%',
      display: 'flex',
      cursor: 'pointer',
      'flex-direction': 'column',
      'justify-content': 'center',
      'align-items': 'center',
      'font-size': '1.4em',
      background: 'transparent none !important',
      color: 'rgba(0, 0, 0, 0.6) !important',
      'font-weight': 400,
      'border-radius': '0.28571429rem',
      'text-transform': 'none',
      'text-shadow': 'none !important',
      '-webkit-box-shadow': '0 0 0 1px rgba(34, 36, 38, 0.15) inset',
      'box-shadow': '0 0 0 1px rgba(34, 36, 38, 0.15) inset'
    }
  },
  summaryTitle: {
    'font-size': '16px',
    'font-weight': 500,
    color: '#a5a5a5',
    'margin-bottom': '8px'
  },
  summaryTable: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      '& thead': {
        display: 'none'
      },
      '& tbody td': {
        display: 'block',
        'text-align': 'right',
        height: '28px',
        '&.quantity div': {
          'justify-content': 'flex-end'
        },
        '&::before': {
          content: 'attr(data-label)',
          'font-weight': 500,
          'text-transform': 'uppercase',
          float: 'left' as 'left'
        },
        '&:last-child': {
          'border-bottom': 0
        }
      }
    },
    [theme.breakpoints.up('sm')]: {
      '& thead th': {
        'font-size': '17px',
        color: '#9b9b9b',
        'letter-spacing': '0.5px',
        'font-weight': 600,
        'margin-bottom': '30px',
        'text-align': 'left',
        width: '11%',
        '&:first-child': {
          width: 'auto'
        },
        '&.subtotal': {
          width: '10%',
          'text-align': 'right'
        },
        '&.action': {
          width: '7%'
        }
      },
      '& tbody': {
        '& tr': {
          height: '50px'
        },
        '& td': {
          'vertical-align': 'middle',
          'font-size': '16px',
          color: '#767676',
          'letter-spacing': '0.44px',
          '&.subtotal': {
            'text-align': 'right'
          },
          '&.quantity div': {
            display: 'flex',
            'align-items': 'center',
            height: '78%',
            overflow: 'hidden',
            '& div': {
              cursor: 'pointer',
              '&.quantity__value': {
                width: '28px',
                'justify-content': 'center'
              }
            }
          },
          '&.action': {
            cursor: 'pointer',
            'text-decoration': 'underline',
            'font-size': '12px',
            'text-align': 'right'
          }
        }
      }
    }
  },
  summaryTotal: {
    padding: '16px 0',
    '& .text': {
      'font-size': '18px',
      'letter-spacing': '0.5px',
      'text-align': 'right',
      '& span': {
        'margin-left': '30px',
        'font-size': '20px',
        'letter-spacing': '0.5px'
      },
      '&.total': {
        'font-weight': 'bold',
        '& span': {
          color: '#d20b1d'
        }
      },
      '&.subtotal': {
        'margin-bottom': '8px',
        'font-weight': 'normal'
      }
    }
  },
  payButton: {
    float: 'right' as 'right',
    'margin-top': '28px',
    'font-size': '1.3em',
    display: 'none',
    '& button': {
      height: '46px',
      'min-width': '305px'
    },
    '&.show': {
      display: 'unset'
    },
    '&.disabled': {
      'pointer-events': 'none',
      filter: 'grayscale(1)'
    }
  },
  disclaimer: {
    'text-align': 'right',
    'font-size': '10px',
    'font-weight': '200',
    color: '#767676',
    clear: 'right' as 'right',
    'margin-top': '98px',
    'margin-bottom': '18px'
  }
});
