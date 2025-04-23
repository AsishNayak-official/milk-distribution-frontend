import { MoveUpRight } from "lucide-react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const SearchEditMilkData = () => {
  return (
    <Command className="rounded-lg border shadow-md md:min-w-[450px]">
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Customers">
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
          <CommandItem>
            <div className="flex flex-col sm:flex-row justify-between w-full items-center">
              <div className="flex flex-row justify-between w-full sm:w-auto items-center">
                <div className="flex items-center gap-4 flex-row">
                  <Avatar>
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col gap-y-0">
                    <span className="leading-tight">Asish Nayak</span>
                    <span>asish.nayak@eximietas.design</span>
                  </div>
                </div>
              <MoveUpRight className="sm:hidden"/>
              </div>
              <div>Update</div>
              <MoveUpRight className="hidden sm:block"/>
            </div>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
      </CommandList>
    </Command>
  );
};

export default SearchEditMilkData;
