import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
    return (
      <div>
        <h1 className=" text-xl font-extralight">Landing Page</h1>
        <Card />

        <Button
        title="Next"
        size="lg"
        styles="rounded-sm"
        />
        <Button
        title="Next"
        size="lg"
        styles="rounded-full"
        />
        <Button
        title="Previous"
        size="lg"
        styles="rounded-lg"
        />
      </div>
    )
  }
  export default Landing