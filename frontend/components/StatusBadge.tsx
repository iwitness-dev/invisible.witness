type Props = {
    status: "unverified" | "match-found" | "no-match";
  };
  
  export default function StatusBadge({ status }: Props) {
    const label = {
      "unverified": "⏳ Not Yet Checked",
      "match-found": "✅ Match Found",
      "no-match": "❌ No Record Found"
    }[status];
  
    const color = {
      "unverified": "bg-yellow-200 text-yellow-800",
      "match-found": "bg-green-200 text-green-800",
      "no-match": "bg-red-200 text-red-800"
    }[status];
  
    return (
      <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${color}`}>
        {label}
      </div>
    );
  }
  