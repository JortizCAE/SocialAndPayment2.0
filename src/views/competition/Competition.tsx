import React, { useState } from 'react';
import SelectField, { SelectItemProps } from '../../components/common/SelectField';

import types from './types.json';
import categories from './categories.json';
import subcategories from './sub-category.json';
import LinkButton from '../../components/common/LinkButton';

export default function Competition() {
  const defaultState = [types.items[1], categories.items[1], subcategories.items[1]];
  const [selected, setSelected] = useState<SelectItemProps[]>(defaultState);
  const [typesValue, setTypesValue] = useState<number>(1);
  const changeTypes = (index: number, item: SelectItemProps) => {
    setTypesValue(index);
    setSelected((v) => {
      const demo = v;
      demo[0] = item;
      return demo;
    });
    selected[0] = item;
  };
  const [category, setCategory] = useState<number>(1);
  const changeCategory = (index: number, item: SelectItemProps) => {
    setCategory(index);
    setSelected((v) => {
      const demo = v;
      demo[1] = item;
      return demo;
    });
  };
  const [subcategory, setSubcategory] = useState<number>(1);
  const changeSubcategory = (index: number, item: SelectItemProps) => {
    setSubcategory(index);
    setSelected((v) => {
      const demo = v;
      demo[2] = item;
      return demo;
    });
  };

  return (
    <main className="md:mt-28 mt-10 shadow-1xl bg-white rounded-lg py-3.5 px-6 container mb-5">
      <h2 className="font-bold text-32xl text-center mt-3">Create Competition</h2>
      <div>
        <div className="hidden lg:block">
          <SelectField value={typesValue} onChange={changeTypes} variant="medium" {...types} />
        </div>
        <div className="block lg:hidden">
          <SelectField value={typesValue} onChange={changeTypes} variant="small" {...types} />
        </div>

        <div className="lg:flex">
          <div className="lg:w-1/2 lg:pr-7">
            <SelectField
              value={category}
              onChange={changeCategory}
              variant="small"
              {...categories}
            />
          </div>
          <div className="lg:w-1/2 lg:pl-7">
            <SelectField
              value={subcategory}
              onChange={changeSubcategory}
              variant="small"
              {...subcategories}
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mb-4">
        <LinkButton
          url="/confirm-details"
          state={{ selectedItems: selected.filter((v) => v !== undefined) }}
          text="Next"
          endIcon="/images/Arrow 1 (1).svg"
        />
      </div>
    </main>
  );
}
