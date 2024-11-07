{
    type Circle = {
        shape: "circle";
        radius: number;
      };
      type Rectangle = {
        shape: "rectangle";
        height: number;
        width: number;
      };
      
      type Shape = Circle | Rectangle;
      const calculateShapeArea = (obj: Shape): number | undefined => {
        if (obj.shape === "circle") {
          return Math.PI * obj.radius * obj.radius;
        } else if (obj.shape === "rectangle") {
          return obj.height * obj.width;
        }
       
        
      };
      const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
      const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
      });
      console.log(circleArea)
      console.log(rectangleArea)
}
