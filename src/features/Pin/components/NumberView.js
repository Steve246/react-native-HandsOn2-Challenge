import NumberItem from "./NumberItem";
import { FlatList } from "react-native";

const NumberView = () => {
  const buttons = [
    { id: 1, buttonType: "0" },
    { id: 2, buttonType: "1" },
    { id: 3, buttonType: "2" },
    { id: 4, buttonType: "3" },
    { id: 5, buttonType: "4" },

    { id: 6, buttonType: "5" },
    { id: 7, buttonType: "6" },
    { id: 8, buttonType: "7" },
    { id: 9, buttonType: "8" },
    { id: 10, buttonType: "9" },
  ];

  const renderItem = ({ item }) => {
    return <NumberItem button={item} />;
  };

  const renderButtonViews = () => {
    const buttonViews = [];
    for (let i = 0; i < buttons.length / 3; i++) {
      const startIndex = i * 3;
      const endIndex = i * 3 + 3;
      const dataButtons = buttons.slice(startIndex, endIndex);
      let contentStyle = { flex: 1, justifyContent: "space-between" };
      if (dataButtons.length % 3 !== 0) {
        contentStyle = { flex: 1 };
      }
      const m = (
        <FlatList
          key={i}
          horizontal
          data={dataButtons}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={contentStyle}
        />
      );
      buttonViews.push(m);
    }
    return buttonViews;
  };
  return <>{renderButtonViews()}</>;
};

export default NumberView;
