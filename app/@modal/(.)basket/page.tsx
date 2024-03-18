"use client";

import Basket from "@/components/Basket";
import { Dialog, DialogHeader, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

const BasketInterception = () => {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <Dialog
      open
      onOpenChange={isOpen => {
        if(!isOpen) {
          onDismiss();
        }
      }}
    >
      {/* <DialogTrigger>Open</DialogTrigger> */}
      <DialogContent className="h-4/5 w-full overflow-scroll max-w-3xl">
        <DialogHeader>
          <DialogTitle>My Basket</DialogTitle>
          <DialogDescription>
            <p>Contents of my basket</p>
          </DialogDescription>
        </DialogHeader>
        
        <Basket />
      </DialogContent>
    </Dialog>
  )
}

export default BasketInterception