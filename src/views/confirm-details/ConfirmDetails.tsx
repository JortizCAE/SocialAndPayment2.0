import React from 'react';
import LinkButton from '../../components/common/LinkButton';
import TextField from '../../components/common/TextField';
import SelectField, { SelectItemProps } from '../../components/common/SelectField';
import Selectbar from './Selectbar';
import CardOptions from './CardOptions';
import SliderLevel from '../../components/common/SliderLevel';
import { useLocation } from 'react-router-dom';

type LocationState = {
  selectedItems: SelectItemProps[];
};

export default function ConfirmDetails() {
  const location = useLocation();
  const { selectedItems } = location.state as LocationState;
  const selected = {
    items: selectedItems,
  };

  return (
    <main>
      <div className="lg:grid lg:grid-cols-2 lg:flex-row flex-col-reverse container mt-20 gap-7 items-center">
        <div className="shadow-1xl p-2.5 bg-white rounded-lg">
          <SelectField variant="small" readonly {...selected} />
        </div>
        <Selectbar />
      </div>
      <div className="container shadow-1xl px-6 pt-5 pb-4 mt-4 mb-8 bg-white">
        <div className="grid lg:grid-cols-5 gap-[75px] mb-8">
          <div className="lg:col-span-3">
            <h4 className="font-medium text-32xl mb-4">Information</h4>
            <div className="bg-white shadow-3xl px-8 sm:px-14 py-6 rounded-md">
              <div className="grid sm:grid-cols-2 gap-14">
                <div className="flex flex-col gap-11">
                  <TextField type="text" label="Competition name" placeholder="Name" />
                  <div className="grid grid-cols-2 gap-5 items-end">
                    <TextField type="date" label="Duration" placeholder="From " />
                    <TextField type="date" placeholder="To" />
                  </div>
                  <SliderLevel />
                  <div className="grid grid-cols-2 gap-5 items-end">
                    <TextField type="number" label="Status" placeholder="Number" />
                    <TextField type="number" label="Goal" placeholder="Number" />
                  </div>
                </div>
                <div className="flex flex-col gap-8">
                  <TextField type="number" label="Wager" placeholder="Amount" sign="$" />

                  <p className="text-10xl font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h4 className="font-medium text-32xl mb-4">Payment</h4>
            <CardOptions />
            <div>
              <div className="flex flex-col gap-5">
                <TextField type="text" label="Name on card" placeholder="Name" />
                <TextField
                  type="number"
                  label="Card number"
                  placeholder="number"
                  icon="/images/Vector.svg"
                />
                <div className="grid grid-cols-5 gap-5 items-end">
                  <div className="flex flex-col col-span-3">
                    <TextField type="date" label="Valid through (MM/YY)" placeholder="Date" />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <TextField
                      type="number"
                      inputProps={{
                        maxLength: 3,
                        pattern: '\\d*',
                      }}
                      label="CCV (3 Digits)"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-2">
          <LinkButton url="/competition" text="Back" startIcon="/images/Arrow 1.svg" />
          <LinkButton url="/" text="Next" endIcon="/images/Arrow 1 (1).svg" />
        </div>
      </div>
    </main>
  );
}
