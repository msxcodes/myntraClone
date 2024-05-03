const useFilter = (items, filterItem) => {
  let finalItems;

  return (finalItems = items.filter((item) => {
    const finalIndex = filterItem.indexOf(item.id);
    return finalIndex >= 0;
  }));
};

export default useFilter;
