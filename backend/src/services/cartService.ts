import { randomUUID } from 'crypto';

let activeCart: any = {
  id: randomUUID(),
  status: 'DRAFT',
  items: [],
  createdAt: new Date().toISOString(),
};

export const getCart = () => {
  return activeCart;
};

export const addToCart = (item: any) => {
  activeCart.items.push({
    id: randomUUID(),
    ...item,
  });
  return activeCart;
};

export const submitCart = () => {
  activeCart.status = 'SUBMITTED';
  activeCart.submittedAt = new Date().toISOString();
  return activeCart;
};
