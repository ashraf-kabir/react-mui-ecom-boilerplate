import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Input,
  Typography,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Nike Air Max 270', 1, 180),
  createRow('Herbal Essences Shampoo', 3, 20),
  createRow('Head First Design Patterns', 1, 50),
];

const invoiceSubtotal = subtotal(rows);

export default function CartTable() {
  return (
    <TableContainer component={Paper}>
      <Table size='small' aria-label='spanning table'>
        <TableHead
          sx={{
            backgroundColor: '#e0e0e0',
          }}
        >
          <TableRow>
            <TableCell>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Product Name
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Qty.
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Unit
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Sum
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography
                variant='subtitle1'
                gutterBottom
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Action
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.desc}>
              <TableCell>{row.desc}</TableCell>
              <TableCell align='right'>
                <Input
                  size='small'
                  id='input-with-icon-adornment'
                  defaultValue={row.qty}
                  sx={{
                    width: '50px',
                  }}
                  inputProps={{
                    type: 'number',
                    step: 1,
                    min: 1,
                    max: 100,
                  }}
                />
              </TableCell>
              <TableCell align='right'>${row.unit}</TableCell>
              <TableCell align='right'>${ccyFormat(row.price)}</TableCell>
              <TableCell align='right'>
                <FontAwesomeIcon icon={faTrash} color='red' />
              </TableCell>
            </TableRow>
          ))}

          <TableRow
            sx={{
              '&:last-child td, &:last-child th': {
                border: 0,
              },
            }}
          >
            <TableCell rowSpan={4} />
            <TableCell colSpan={2}>
              <Typography
                variant='subtitle1'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                Subtotal
              </Typography>
            </TableCell>
            <TableCell align='right'>
              <Typography
                variant='subtitle1'
                sx={{
                  fontWeight: 'bold',
                }}
              >
                ${ccyFormat(invoiceSubtotal)}
              </Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
