import Button from "@components/Button";

export default function ButtonDemo() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Button Component Demo</h1>
      <p className="mb-6 text-gray-700">This is a demo of the reusable <code>Button</code> component from <code>ui-kit</code>.</p>
      <Button label="Click me" onClick={() => console.log('clicked')} />
    </main>
  );
}
