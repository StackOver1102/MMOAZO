import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { OrderTitle } from "../order/OrderTitle";
import { ProductTitle } from "../product/ProductTitle";

export const OrderDetailCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="discount" source="discount" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
        <NumberInput label="price" source="price" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="quantity" source="quantity" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
