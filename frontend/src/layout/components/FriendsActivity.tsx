import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatStore } from "@/stores/useChatStore";
import { useUser } from "@clerk/clerk-react";
import { Users } from "lucide-react";
import { useEffect } from "react";

const FriendsActivity = () => {
  const { fetchUsers } = useChatStore();
  const { user } = useUser();

  useEffect(() => {
    if (user) fetchUsers();
  }, [fetchUsers, user]);

  return (
    <div className="h-full bg-zinc-900 rounded-lg flex flex-col">
      <div className="p-4 flex justify-between items-center border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Users className="size-5 shrink-0" />
          <h2 className="font-semibold">What they're listening to</h2>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-4">
          <div className="cursor-pointer hover:bg-zinc-800/50 p-3 rounded-md transition-colors group">
            <div className="flex items-start gap-3">
              <div className="relative"></div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-sm text-white"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
export default FriendsActivity;
