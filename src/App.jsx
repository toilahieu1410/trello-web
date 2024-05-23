import BoardBar from "./pages/Boards/_id";
import Board from "./pages/Boards/_id";


// function ModeToggle() {
//   const { mode, setMode } = useColorScheme(); // use này làm cho bước lưu vào localStorage rồi
//   return (
//     <Button
//       onClick={() => {
//         setMode(mode === "light" ? "dark" : "light");
//       }}
//     >
//       {mode === "light" ? "Turn dark" : "Turn light"}
//     </Button>
//   );
// }



function App() {
    return (
        <>
         <BoardBar />
        </>
    )
}

export default App;
