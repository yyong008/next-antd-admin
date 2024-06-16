import { useEffect, useState } from 'react';

import { Select } from 'antd';

type LocalModelsProps = {
  ollama: any;
};

export const LocalModels = ({ ollama }: LocalModelsProps) => {
  const [value, setValue] = useState<string>();
  const [localList, setLocalList] = useState<any>([]);
  const handleSearch = (newValue: string) => {};

  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  useEffect(() => {
    ollama?.list().then((list: any) => {
      setLocalList(list ?? []);
    });
  }, [ollama]);

  return (
    <div className="flex justify-center  bg-slate-250 w-[100%]">
      <Select
        showSearch
        variant="borderless"
        value={value}
        placeholder="选择一个模型"
        defaultActiveFirstOption={false}
        suffixIcon={null}
        filterOption={false}
        onSearch={handleSearch}
        onChange={handleChange}
        notFoundContent={null}
        options={(localList?.models || [])?.map((d: any) => ({
          value: d.name,
          label: d.name,
        }))}
      />
    </div>
  );
};
