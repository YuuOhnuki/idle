import { Member } from '@/app/members/page';
import { Card } from '@heroui/react';

type MemberCardProps = {
    members: Member[];
};

const MemberCard = ({ members }: MemberCardProps) => {
    console.log(members);
    return (
        <div>
            {members.map((member: Member, index) => {
                return (
                    <Card key={index}>
                        <Card.Header>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Description>{member.role}</Card.Description>
                        </Card.Header>
                        <Card.Content>{member.introduction}</Card.Content>
                        <Card.Footer />
                    </Card>
                );
            })}
        </div>
    );
};

export default MemberCard;
