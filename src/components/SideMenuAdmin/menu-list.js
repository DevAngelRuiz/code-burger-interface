import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import BorderColorIcon from '@mui/icons-material/BorderColor'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import paths from '../../constants/paths'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: BorderColorIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.ProductsList,
    icon: ShoppingCartIcon
  },
  {
    id: 3,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddShoppingCartIcon
  }

]
export default listLinks
