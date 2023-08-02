

const [width, setwidth] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setwidth({
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);